from fastapi import FastAPI, APIRouter, HTTPException, status
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import List
from datetime import datetime

# Import our models
from models import (
    ContactMessageCreate, 
    ContactMessage, 
    NewsletterSubscribeRequest, 
    NewsletterSubscriber,
    APIResponse,
    ContactMessageResponse
)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Portfolio API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Original status check endpoints
@api_router.get("/")
async def root():
    return {"message": "Portfolio API is running"}

# Contact Form Endpoints
@api_router.post("/contact", response_model=ContactMessageResponse)
async def submit_contact_form(contact_data: ContactMessageCreate):
    try:
        # Create contact message object
        contact_message = ContactMessage(**contact_data.dict())
        
        # Save to database
        result = await db.contact_messages.insert_one(contact_message.dict())
        
        if result.inserted_id:
            logger.info(f"New contact message from {contact_data.email}")
            return ContactMessageResponse(
                success=True,
                message="Thank you for your message! I'll get back to you soon.",
                id=contact_message.id
            )
        else:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to save contact message"
            )
            
    except Exception as e:
        logger.error(f"Error saving contact message: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to submit contact form"
        )

@api_router.get("/contact", response_model=List[ContactMessage])
async def get_contact_messages():
    """Get all contact messages (for admin use)"""
    try:
        messages = await db.contact_messages.find().sort("created_at", -1).to_list(100)
        return [ContactMessage(**message) for message in messages]
    except Exception as e:
        logger.error(f"Error fetching contact messages: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch contact messages"
        )

# Newsletter Subscription Endpoints
@api_router.post("/newsletter/subscribe", response_model=APIResponse)
async def subscribe_newsletter(subscription: NewsletterSubscribeRequest):
    try:
        # Check if email already exists
        existing_subscriber = await db.newsletter_subscribers.find_one(
            {"email": subscription.email}
        )
        
        if existing_subscriber:
            return APIResponse(
                success=False,
                message="Email already subscribed to newsletter"
            )
        
        # Create new subscriber
        subscriber = NewsletterSubscriber(email=subscription.email)
        
        # Save to database
        result = await db.newsletter_subscribers.insert_one(subscriber.dict())
        
        if result.inserted_id:
            logger.info(f"New newsletter subscription: {subscription.email}")
            return APIResponse(
                success=True,
                message="Successfully subscribed to newsletter!"
            )
        else:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to save subscription"
            )
            
    except Exception as e:
        logger.error(f"Error saving newsletter subscription: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to subscribe to newsletter"
        )

@api_router.get("/newsletter/subscribers")
async def get_newsletter_subscribers():
    """Get all newsletter subscribers (for admin use)"""
    try:
        subscribers = await db.newsletter_subscribers.find(
            {"status": "active"}
        ).sort("subscribed_at", -1).to_list(1000)
        
        # Convert to Pydantic models to ensure proper serialization
        subscriber_models = [NewsletterSubscriber(**subscriber) for subscriber in subscribers]
        
        return {
            "success": True,
            "data": [subscriber.dict() for subscriber in subscriber_models],
            "count": len(subscriber_models)
        }
    except Exception as e:
        logger.error(f"Error fetching newsletter subscribers: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch subscribers"
        )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
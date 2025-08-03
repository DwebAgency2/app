from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime
import uuid

# Contact Form Models
class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=1, max_length=200)
    message: str = Field(..., min_length=10, max_length=2000)

class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = Field(default="new")  # new, read, replied

# Newsletter Models
class NewsletterSubscribeRequest(BaseModel):
    email: EmailStr

class NewsletterSubscriber(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    subscribed_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = Field(default="active")  # active, unsubscribed

# Response Models
class APIResponse(BaseModel):
    success: bool
    message: str
    data: Optional[dict] = None

class ContactMessageResponse(APIResponse):
    id: Optional[str] = None
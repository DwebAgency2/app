# Portfolio Website API Contracts

## Overview
This document outlines the API contracts for integrating the frontend portfolio website with the backend services.

## Current Mock Data (to be moved to backend)
- Projects data in `mockData.js`
- Skills data in `mockData.js` 
- Services data in `mockData.js`
- Testimonials data in `mockData.js`
- Blog posts data in `mockData.js`

## API Endpoints to Implement

### 1. Contact Form Submission
**Endpoint:** `POST /api/contact`
**Purpose:** Handle contact form submissions from the website

```json
Request Body:
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "subject": "string (required)",
  "message": "string (required)"
}

Response (Success - 200):
{
  "success": true,
  "message": "Thank you for your message! I'll get back to you soon.",
  "id": "contact_message_id"
}

Response (Error - 400):
{
  "success": false,
  "message": "Validation error details",
  "errors": ["field1 is required", "invalid email format"]
}
```

### 2. Newsletter Subscription
**Endpoint:** `POST /api/newsletter/subscribe`
**Purpose:** Handle newsletter subscription requests

```json
Request Body:
{
  "email": "string (required, valid email)"
}

Response (Success - 200):
{
  "success": true,
  "message": "Successfully subscribed to newsletter!"
}

Response (Already Subscribed - 409):
{
  "success": false,
  "message": "Email already subscribed to newsletter"
}
```

### 3. Portfolio Data Endpoints (Optional Enhancement)
**Endpoint:** `GET /api/projects`
**Purpose:** Fetch projects data dynamically

```json
Response:
{
  "success": true,
  "data": [
    {
      "id": "number",
      "title": "string",
      "description": "string",
      "image": "string (URL)",
      "technologies": ["string"],
      "liveUrl": "string (optional)",
      "githubUrl": "string",
      "category": "string"
    }
  ]
}
```

## Database Models

### ContactMessage Model
```python
class ContactMessage(BaseModel):
    id: str
    name: str
    email: str
    subject: str
    message: str
    created_at: datetime
    status: str = "new"  # new, read, replied
```

### NewsletterSubscriber Model
```python
class NewsletterSubscriber(BaseModel):
    id: str
    email: str
    subscribed_at: datetime
    status: str = "active"  # active, unsubscribed
```

## Frontend Integration Changes

### Contact Form (Contact.js)
- Replace mock `handleSubmit` with actual API call to `/api/contact`
- Add proper loading states and error handling
- Show success/error messages using toast notifications

### Newsletter Subscription (Blog.js & Footer.js)
- Replace mock subscription with actual API call to `/api/newsletter/subscribe`
- Add loading states for subscription button
- Handle duplicate subscription gracefully

## Implementation Priority
1. **High Priority:** Contact form submission (main business functionality)
2. **Medium Priority:** Newsletter subscription (lead generation)
3. **Low Priority:** Dynamic portfolio data endpoints (can stay as mock data)

## Success Criteria
- Contact form submissions are stored in database
- Email notifications sent for new contact submissions (optional)
- Newsletter subscriptions are tracked
- Proper error handling and validation
- Frontend shows appropriate success/error messages
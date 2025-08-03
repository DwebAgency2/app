#!/usr/bin/env python3
"""
Backend API Testing Suite for Portfolio Website
Tests all backend endpoints including contact form and newsletter subscription
"""

import requests
import json
import os
from datetime import datetime
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get backend URL from environment
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL')
if not BACKEND_URL:
    print("❌ REACT_APP_BACKEND_URL not found in environment")
    exit(1)

API_BASE_URL = f"{BACKEND_URL}/api"

print(f"🔗 Testing backend at: {API_BASE_URL}")

class BackendTester:
    def __init__(self):
        self.test_results = {
            'contact_form': {'passed': 0, 'failed': 0, 'tests': []},
            'newsletter': {'passed': 0, 'failed': 0, 'tests': []},
            'database': {'passed': 0, 'failed': 0, 'tests': []},
            'error_handling': {'passed': 0, 'failed': 0, 'tests': []}
        }
        
    def log_test(self, category, test_name, passed, details=""):
        """Log test result"""
        status = "✅ PASS" if passed else "❌ FAIL"
        print(f"{status}: {test_name}")
        if details:
            print(f"   Details: {details}")
            
        self.test_results[category]['tests'].append({
            'name': test_name,
            'passed': passed,
            'details': details
        })
        
        if passed:
            self.test_results[category]['passed'] += 1
        else:
            self.test_results[category]['failed'] += 1
    
    def test_api_health(self):
        """Test if API is running"""
        print("\n🔍 Testing API Health...")
        try:
            response = requests.get(f"{API_BASE_URL}/", timeout=10)
            if response.status_code == 200:
                data = response.json()
                self.log_test('database', 'API Health Check', True, f"Status: {response.status_code}, Message: {data.get('message', 'N/A')}")
                return True
            else:
                self.log_test('database', 'API Health Check', False, f"Status: {response.status_code}")
                return False
        except Exception as e:
            self.log_test('database', 'API Health Check', False, f"Connection error: {str(e)}")
            return False
    
    def test_contact_form_valid_submission(self):
        """Test valid contact form submission"""
        print("\n🔍 Testing Contact Form - Valid Submission...")
        
        test_data = {
            "name": "Sarah Johnson",
            "email": "sarah.johnson@example.com",
            "subject": "Portfolio Website Inquiry",
            "message": "Hi! I'm interested in discussing a potential web development project. Your portfolio looks impressive and I'd love to chat about working together on a modern e-commerce platform."
        }
        
        try:
            response = requests.post(f"{API_BASE_URL}/contact", json=test_data, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('success') and data.get('id'):
                    self.log_test('contact_form', 'Valid Contact Form Submission', True, 
                                f"Message ID: {data.get('id')}, Response: {data.get('message')}")
                    return data.get('id')
                else:
                    self.log_test('contact_form', 'Valid Contact Form Submission', False, 
                                f"Invalid response structure: {data}")
            else:
                self.log_test('contact_form', 'Valid Contact Form Submission', False, 
                            f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_test('contact_form', 'Valid Contact Form Submission', False, f"Error: {str(e)}")
        
        return None
    
    def test_contact_form_validation_errors(self):
        """Test contact form validation errors"""
        print("\n🔍 Testing Contact Form - Validation Errors...")
        
        # Test cases for validation
        test_cases = [
            {
                "name": "Missing Name Field",
                "data": {
                    "email": "test@example.com",
                    "subject": "Test Subject",
                    "message": "This is a test message with sufficient length."
                }
            },
            {
                "name": "Invalid Email Format",
                "data": {
                    "name": "Test User",
                    "email": "invalid-email",
                    "subject": "Test Subject",
                    "message": "This is a test message with sufficient length."
                }
            },
            {
                "name": "Empty Subject",
                "data": {
                    "name": "Test User",
                    "email": "test@example.com",
                    "subject": "",
                    "message": "This is a test message with sufficient length."
                }
            },
            {
                "name": "Message Too Short",
                "data": {
                    "name": "Test User",
                    "email": "test@example.com",
                    "subject": "Test Subject",
                    "message": "Short"
                }
            }
        ]
        
        for test_case in test_cases:
            try:
                response = requests.post(f"{API_BASE_URL}/contact", json=test_case["data"], timeout=10)
                
                # Should return 422 for validation errors
                if response.status_code == 422:
                    self.log_test('error_handling', f'Contact Form Validation - {test_case["name"]}', True, 
                                f"Correctly returned 422 for validation error")
                else:
                    self.log_test('error_handling', f'Contact Form Validation - {test_case["name"]}', False, 
                                f"Expected 422, got {response.status_code}")
            except Exception as e:
                self.log_test('error_handling', f'Contact Form Validation - {test_case["name"]}', False, f"Error: {str(e)}")
    
    def test_get_contact_messages(self):
        """Test retrieving contact messages"""
        print("\n🔍 Testing Get Contact Messages...")
        
        try:
            response = requests.get(f"{API_BASE_URL}/contact", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test('contact_form', 'Get Contact Messages', True, 
                                f"Retrieved {len(data)} messages")
                    return data
                else:
                    self.log_test('contact_form', 'Get Contact Messages', False, 
                                f"Expected list, got: {type(data)}")
            else:
                self.log_test('contact_form', 'Get Contact Messages', False, 
                            f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_test('contact_form', 'Get Contact Messages', False, f"Error: {str(e)}")
        
        return None
    
    def test_newsletter_subscription_valid(self):
        """Test valid newsletter subscription"""
        print("\n🔍 Testing Newsletter - Valid Subscription...")
        
        test_email = "newsletter.subscriber@example.com"
        test_data = {"email": test_email}
        
        try:
            response = requests.post(f"{API_BASE_URL}/newsletter/subscribe", json=test_data, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('success'):
                    self.log_test('newsletter', 'Valid Newsletter Subscription', True, 
                                f"Response: {data.get('message')}")
                    return True
                else:
                    self.log_test('newsletter', 'Valid Newsletter Subscription', False, 
                                f"Success=False: {data.get('message')}")
            else:
                self.log_test('newsletter', 'Valid Newsletter Subscription', False, 
                            f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_test('newsletter', 'Valid Newsletter Subscription', False, f"Error: {str(e)}")
        
        return False
    
    def test_newsletter_duplicate_subscription(self):
        """Test duplicate newsletter subscription handling"""
        print("\n🔍 Testing Newsletter - Duplicate Subscription...")
        
        test_email = "duplicate.test@example.com"
        test_data = {"email": test_email}
        
        try:
            # First subscription
            response1 = requests.post(f"{API_BASE_URL}/newsletter/subscribe", json=test_data, timeout=10)
            
            # Second subscription (duplicate)
            response2 = requests.post(f"{API_BASE_URL}/newsletter/subscribe", json=test_data, timeout=10)
            
            if response2.status_code == 200:
                data = response2.json()
                if not data.get('success') and "already subscribed" in data.get('message', '').lower():
                    self.log_test('newsletter', 'Duplicate Newsletter Subscription', True, 
                                f"Correctly handled duplicate: {data.get('message')}")
                else:
                    self.log_test('newsletter', 'Duplicate Newsletter Subscription', False, 
                                f"Did not handle duplicate correctly: {data}")
            else:
                self.log_test('newsletter', 'Duplicate Newsletter Subscription', False, 
                            f"Status: {response2.status_code}")
        except Exception as e:
            self.log_test('newsletter', 'Duplicate Newsletter Subscription', False, f"Error: {str(e)}")
    
    def test_newsletter_invalid_email(self):
        """Test newsletter subscription with invalid email"""
        print("\n🔍 Testing Newsletter - Invalid Email...")
        
        test_data = {"email": "invalid-email-format"}
        
        try:
            response = requests.post(f"{API_BASE_URL}/newsletter/subscribe", json=test_data, timeout=10)
            
            # Should return 422 for validation error
            if response.status_code == 422:
                self.log_test('error_handling', 'Newsletter Invalid Email', True, 
                            f"Correctly returned 422 for invalid email")
            else:
                self.log_test('error_handling', 'Newsletter Invalid Email', False, 
                            f"Expected 422, got {response.status_code}")
        except Exception as e:
            self.log_test('error_handling', 'Newsletter Invalid Email', False, f"Error: {str(e)}")
    
    def test_get_newsletter_subscribers(self):
        """Test retrieving newsletter subscribers"""
        print("\n🔍 Testing Get Newsletter Subscribers...")
        
        try:
            response = requests.get(f"{API_BASE_URL}/newsletter/subscribers", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('success') and 'data' in data and 'count' in data:
                    self.log_test('newsletter', 'Get Newsletter Subscribers', True, 
                                f"Retrieved {data.get('count')} subscribers")
                    return data
                else:
                    self.log_test('newsletter', 'Get Newsletter Subscribers', False, 
                                f"Invalid response structure: {data}")
            else:
                self.log_test('newsletter', 'Get Newsletter Subscribers', False, 
                            f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_test('newsletter', 'Get Newsletter Subscribers', False, f"Error: {str(e)}")
        
        return None
    
    def test_empty_request_bodies(self):
        """Test endpoints with empty request bodies"""
        print("\n🔍 Testing Empty Request Bodies...")
        
        endpoints = [
            ("/contact", "Contact Form"),
            ("/newsletter/subscribe", "Newsletter Subscribe")
        ]
        
        for endpoint, name in endpoints:
            try:
                response = requests.post(f"{API_BASE_URL}{endpoint}", json={}, timeout=10)
                
                # Should return 422 for validation error
                if response.status_code == 422:
                    self.log_test('error_handling', f'Empty Request Body - {name}', True, 
                                f"Correctly returned 422")
                else:
                    self.log_test('error_handling', f'Empty Request Body - {name}', False, 
                                f"Expected 422, got {response.status_code}")
            except Exception as e:
                self.log_test('error_handling', f'Empty Request Body - {name}', False, f"Error: {str(e)}")
    
    def test_database_persistence(self):
        """Test that data persists correctly in database"""
        print("\n🔍 Testing Database Persistence...")
        
        # Submit a contact form and verify it appears in the list
        test_data = {
            "name": "Database Test User",
            "email": "dbtest@example.com",
            "subject": "Database Persistence Test",
            "message": "This message is used to test database persistence functionality."
        }
        
        try:
            # Submit contact form
            submit_response = requests.post(f"{API_BASE_URL}/contact", json=test_data, timeout=10)
            
            if submit_response.status_code == 200:
                submit_data = submit_response.json()
                message_id = submit_data.get('id')
                
                if message_id:
                    # Retrieve messages and check if our message is there
                    get_response = requests.get(f"{API_BASE_URL}/contact", timeout=10)
                    
                    if get_response.status_code == 200:
                        messages = get_response.json()
                        
                        # Look for our message
                        found_message = None
                        for msg in messages:
                            if msg.get('id') == message_id:
                                found_message = msg
                                break
                        
                        if found_message:
                            # Verify all fields are correct
                            fields_correct = (
                                found_message.get('name') == test_data['name'] and
                                found_message.get('email') == test_data['email'] and
                                found_message.get('subject') == test_data['subject'] and
                                found_message.get('message') == test_data['message'] and
                                found_message.get('created_at') is not None
                            )
                            
                            if fields_correct:
                                self.log_test('database', 'Contact Message Persistence', True, 
                                            f"Message correctly saved and retrieved with ID: {message_id}")
                            else:
                                self.log_test('database', 'Contact Message Persistence', False, 
                                            f"Message fields don't match: {found_message}")
                        else:
                            self.log_test('database', 'Contact Message Persistence', False, 
                                        f"Message with ID {message_id} not found in database")
                    else:
                        self.log_test('database', 'Contact Message Persistence', False, 
                                    f"Failed to retrieve messages: {get_response.status_code}")
                else:
                    self.log_test('database', 'Contact Message Persistence', False, 
                                "No message ID returned from submission")
            else:
                self.log_test('database', 'Contact Message Persistence', False, 
                            f"Failed to submit message: {submit_response.status_code}")
        except Exception as e:
            self.log_test('database', 'Contact Message Persistence', False, f"Error: {str(e)}")
    
    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting Backend API Tests...")
        print("=" * 60)
        
        # Test API health first
        if not self.test_api_health():
            print("❌ API is not accessible. Stopping tests.")
            return
        
        # Contact Form Tests
        self.test_contact_form_valid_submission()
        self.test_contact_form_validation_errors()
        self.test_get_contact_messages()
        
        # Newsletter Tests
        self.test_newsletter_subscription_valid()
        self.test_newsletter_duplicate_subscription()
        self.test_newsletter_invalid_email()
        self.test_get_newsletter_subscribers()
        
        # Error Handling Tests
        self.test_empty_request_bodies()
        
        # Database Tests
        self.test_database_persistence()
        
        # Print summary
        self.print_summary()
    
    def print_summary(self):
        """Print test summary"""
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        
        total_passed = 0
        total_failed = 0
        
        for category, results in self.test_results.items():
            passed = results['passed']
            failed = results['failed']
            total = passed + failed
            
            total_passed += passed
            total_failed += failed
            
            if total > 0:
                success_rate = (passed / total) * 100
                print(f"{category.upper().replace('_', ' ')}: {passed}/{total} passed ({success_rate:.1f}%)")
        
        print("-" * 60)
        grand_total = total_passed + total_failed
        if grand_total > 0:
            overall_success = (total_passed / grand_total) * 100
            print(f"OVERALL: {total_passed}/{grand_total} passed ({overall_success:.1f}%)")
        
        if total_failed == 0:
            print("🎉 All tests passed!")
        else:
            print(f"⚠️  {total_failed} test(s) failed")
        
        print("=" * 60)

if __name__ == "__main__":
    tester = BackendTester()
    tester.run_all_tests()
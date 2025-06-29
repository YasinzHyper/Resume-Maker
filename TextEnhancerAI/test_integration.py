#!/usr/bin/env python3
"""
Test script to verify Text Enhancer integration
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from textEnhancer import enhance_text, enhance_resume_section

def test_enhance_text():
    """Test the enhance_text function"""
    print("Testing enhance_text function...")
    
    test_text = "I am software developer focus on front end development and trying to learn full stack. I have 2 years work experience in technology."
    
    try:
        result = enhance_text(test_text)
        print("✅ enhance_text function works!")
        print(f"Enhanced text: {result}")
        return True
    except Exception as e:
        print(f"❌ enhance_text function error: {e}")
        return False

def test_enhance_resume_section():
    """Test the enhance_resume_section function"""
    print("\nTesting enhance_resume_section function...")
    
    test_text = "Software developer with experience in React and Node.js"
    section_type = "summary"
    
    try:
        result = enhance_resume_section(test_text, section_type)
        print("✅ enhance_resume_section function works!")
        print(f"Enhanced text: {result}")
        return True
    except Exception as e:
        print(f"❌ enhance_resume_section function error: {e}")
        return False

def test_imports():
    """Test if all required imports work"""
    print("Testing imports...")
    
    try:
        import requests
        import os
        from dotenv import load_dotenv
        import json
        print("✅ All imports successful!")
        return True
    except ImportError as e:
        print(f"❌ Import error: {e}")
        return False

if __name__ == "__main__":
    print("🧪 Testing Text Enhancer Integration...\n")
    
    tests = [
        test_imports,
        test_enhance_text,
        test_enhance_resume_section
    ]
    
    passed = 0
    total = len(tests)
    
    for test in tests:
        if test():
            passed += 1
    
    print(f"\n📊 Test Results: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed! Text Enhancer integration is working correctly.")
    else:
        print("⚠️  Some tests failed. Please check the errors above.")
    
    print("\n📝 Next steps:")
    print("1. Test the full integration in the Resume Builder")
    print("2. Verify the Enhance button works in the Professional Summary section") 
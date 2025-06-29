# Text Enhancer AI Module

This module provides AI-powered text enhancement functionality for the CWIX Resume Builder application.

## Features

- **General Text Enhancement**: Improve clarity, grammar, and professional tone
- **Resume Section Enhancement**: Specialized enhancement for different resume sections
- **API Integration**: Uses Groq API for fast and reliable text processing
- **Error Handling**: Comprehensive error handling and user feedback

## Setup

1. **Install Python Dependencies**:

   ```bash
   cd TextEnhancerAI
   pip install -r requirements.txt
   ```

2. **Environment Variables**:

   - Copy `env_example.txt` to `.env`
   - Add your Groq API key:
     ```
     GROQ_API_KEY=your_groq_api_key_here
     ```

3. **Backend Integration**:
   - The module is integrated into the Node.js backend using `python-shell`
   - API endpoints are available at `/api/text-enhancer/`

## Usage

### In Resume Builder

- Navigate to the Templates section
- Select a template and go to the Resume Builder
- In the Personal Information section, find the "Professional Summary" field
- Click the "Enhance" button to improve your summary text

### API Endpoints

- `POST /api/text-enhancer/enhance` - Enhance general text
- `POST /api/text-enhancer/enhance-resume-section` - Enhance specific resume sections

## File Structure

```
TextEnhancerAI/
├── textEnhancer.py          # Main Python script
├── requirements.txt         # Python dependencies
├── env_example.txt         # Environment variables template
└── README.md              # This file
```

## Supported Resume Sections

- **summary**: Professional summary enhancement
- **experience**: Work experience bullet points
- **skills**: Skills presentation and organization
- **education**: Education section enhancement
- **projects**: Project descriptions

## Error Handling

The module includes comprehensive error handling for:

- Missing API keys
- Network connectivity issues
- Invalid API responses
- User input validation

## Dependencies

- `requests`: HTTP requests to Groq API
- `python-dotenv`: Environment variable management
- `python-shell`: Node.js integration (backend)

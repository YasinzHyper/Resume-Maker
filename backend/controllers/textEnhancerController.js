const { PythonShell } = require('python-shell');
const path = require('path');

const enhanceText = async (req, res) => {
    try {
        const { text, sectionType = 'general' } = req.body;

        if (!text) {
            return res.status(400).json({ 
                success: false, 
                message: 'Text is required' 
            });
        }

        // Path to the Python script
        const scriptPath = path.join(__dirname, '../../TextEnhancerAI/textEnhancer.py');
        
        // Options for Python script
        const options = {
            mode: 'text',
            pythonPath: 'python', // or 'python3' depending on your system
            pythonOptions: ['-u'], // unbuffered output
            scriptPath: path.dirname(scriptPath),
            args: [text, sectionType]
        };

        // Run the Python script
        PythonShell.run(path.basename(scriptPath), options, (err, results) => {
            if (err) {
                console.error('Python script error:', err);
                return res.status(500).json({
                    success: false,
                    message: 'Text enhancement failed',
                    error: err.message
                });
            }

            if (results && results.length > 0) {
                // The enhanced text should be the last result
                const enhancedText = results[results.length - 1];
                
                res.json({
                    success: true,
                    originalText: text,
                    enhancedText: enhancedText,
                    sectionType: sectionType
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: 'No enhancement result received'
                });
            }
        });

    } catch (error) {
        console.error('Text enhancement controller error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

const enhanceResumeSection = async (req, res) => {
    try {
        const { sectionText, sectionType } = req.body;

        if (!sectionText || !sectionType) {
            return res.status(400).json({
                success: false,
                message: 'Section text and section type are required'
            });
        }

        // Valid section types
        const validSectionTypes = ['summary', 'experience', 'skills', 'education', 'projects'];
        
        if (!validSectionTypes.includes(sectionType)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid section type. Must be one of: summary, experience, skills, education, projects'
            });
        }

        // Path to the Python script
        const scriptPath = path.join(__dirname, '../../TextEnhancerAI/textEnhancer.py');
        
        // Options for Python script
        const options = {
            mode: 'text',
            pythonPath: 'python',
            pythonOptions: ['-u'],
            scriptPath: path.dirname(scriptPath),
            args: [sectionText, sectionType]
        };

        // Run the Python script
        PythonShell.run(path.basename(scriptPath), options, (err, results) => {
            if (err) {
                console.error('Python script error:', err);
                return res.status(500).json({
                    success: false,
                    message: 'Resume section enhancement failed',
                    error: err.message
                });
            }

            if (results && results.length > 0) {
                const enhancedText = results[results.length - 1];
                
                res.json({
                    success: true,
                    originalText: sectionText,
                    enhancedText: enhancedText,
                    sectionType: sectionType
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: 'No enhancement result received'
                });
            }
        });

    } catch (error) {
        console.error('Resume section enhancement controller error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

module.exports = {
    enhanceText,
    enhanceResumeSection
}; 
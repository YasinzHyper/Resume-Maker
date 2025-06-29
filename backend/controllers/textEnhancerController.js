const { PythonShell } = require('python-shell');
const path = require('path');

const enhanceText = async (req, res) => {
    try {
        const { text, sectionType = 'general' } = req.body;

        console.log('Received text enhancement request:', { text: text?.substring(0, 100) + '...', sectionType });

        if (!text || text.trim().length === 0) {
            return res.status(400).json({ 
                success: false, 
                message: 'Text is required and cannot be empty' 
            });
        }

        // Path to the Python script
        const scriptPath = path.join(__dirname, '../../TextEnhancerAI/textEnhancer.py');
        console.log('Python script path:', scriptPath);
        
        // Check if the script exists
        const fs = require('fs');
        if (!fs.existsSync(scriptPath)) {
            console.error('Python script not found at:', scriptPath);
            return res.status(500).json({
                success: false,
                message: 'Text enhancement service is not available',
                error: 'Python script not found'
            });
        }

        // Options for Python script
        const options = {
            mode: 'text',
            pythonPath: 'python3', // Try python3 first
            pythonOptions: ['-u'], // unbuffered output
            scriptPath: path.dirname(scriptPath),
            args: [text.trim(), sectionType]
        };

        console.log('Running Python script with options:', options);

        // Run the Python script
        PythonShell.run(path.basename(scriptPath), options, (err, results) => {
            if (err) {
                console.error('Python script error:', err);
                
                // Try with 'python' instead of 'python3'
                const fallbackOptions = {
                    ...options,
                    pythonPath: 'python'
                };
                
                console.log('Retrying with python instead of python3...');
                
                PythonShell.run(path.basename(scriptPath), fallbackOptions, (fallbackErr, fallbackResults) => {
                    if (fallbackErr) {
                        console.error('Python script fallback error:', fallbackErr);
                        return res.status(500).json({
                            success: false,
                            message: 'Text enhancement failed. Please ensure Python is installed and configured properly.',
                            error: fallbackErr.message
                        });
                    }

                    if (fallbackResults && fallbackResults.length > 0) {
                        const enhancedText = fallbackResults[fallbackResults.length - 1];
                        console.log('Enhancement successful (fallback)');
                        
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
                return;
            }

            if (results && results.length > 0) {
                // The enhanced text should be the last result
                const enhancedText = results[results.length - 1];
                console.log('Enhancement successful:', enhancedText?.substring(0, 100) + '...');
                
                res.json({
                    success: true,
                    originalText: text,
                    enhancedText: enhancedText,
                    sectionType: sectionType
                });
            } else {
                console.error('No results from Python script');
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
        const { text, sectionType } = req.body;

        console.log('Received resume section enhancement request:', { text: text?.substring(0, 100) + '...', sectionType });

        if (!text || text.trim().length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Section text is required and cannot be empty'
            });
        }

        if (!sectionType) {
            return res.status(400).json({
                success: false,
                message: 'Section type is required'
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
        console.log('Python script path:', scriptPath);
        
        // Check if the script exists
        const fs = require('fs');
        if (!fs.existsSync(scriptPath)) {
            console.error('Python script not found at:', scriptPath);
            return res.status(500).json({
                success: false,
                message: 'Text enhancement service is not available',
                error: 'Python script not found'
            });
        }

        // Options for Python script
        const options = {
            mode: 'text',
            pythonPath: 'python3',
            pythonOptions: ['-u'],
            scriptPath: path.dirname(scriptPath),
            args: [text.trim(), sectionType]
        };

        console.log('Running Python script with options:', options);

        // Run the Python script
        PythonShell.run(path.basename(scriptPath), options, (err, results) => {
            if (err) {
                console.error('Python script error:', err);
                
                // Try with 'python' instead of 'python3'
                const fallbackOptions = {
                    ...options,
                    pythonPath: 'python'
                };
                
                console.log('Retrying with python instead of python3...');
                
                PythonShell.run(path.basename(scriptPath), fallbackOptions, (fallbackErr, fallbackResults) => {
                    if (fallbackErr) {
                        console.error('Python script fallback error:', fallbackErr);
                        return res.status(500).json({
                            success: false,
                            message: 'Resume section enhancement failed. Please ensure Python is installed and configured properly.',
                            error: fallbackErr.message
                        });
                    }

                    if (fallbackResults && fallbackResults.length > 0) {
                        const enhancedText = fallbackResults[fallbackResults.length - 1];
                        console.log('Enhancement successful (fallback)');
                        
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
                return;
            }

            if (results && results.length > 0) {
                const enhancedText = results[results.length - 1];
                console.log('Enhancement successful:', enhancedText?.substring(0, 100) + '...');
                
                res.json({
                    success: true,
                    originalText: text,
                    enhancedText: enhancedText,
                    sectionType: sectionType
                });
            } else {
                console.error('No results from Python script');
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
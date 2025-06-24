const API_BASE_URL = import.meta.env.PROD ? '/api' : 'http://localhost:5000/api';

export interface SignupData {
  name: string;
  email: string;
  password: string;
}

export interface SigninData {
  email: string;
  password: string;
}

export interface ApiResponse {
  message: string;
  success: boolean;
  token?: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
  error?: string;
}

class ApiService {
  private async makeRequest(endpoint: string, options: RequestInit = {}): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      return {
        message: 'Network error occurred',
        success: false,
        error: 'Failed to connect to server'
      };
    }
  }

  async signup(userData: SignupData): Promise<ApiResponse> {
    return this.makeRequest('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async signin(userData: SigninData): Promise<ApiResponse> {
    return this.makeRequest('/auth/signin', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async healthCheck(): Promise<ApiResponse> {
    return this.makeRequest('/health');
  }
}

export const apiService = new ApiService();
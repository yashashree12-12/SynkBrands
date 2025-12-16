import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem('synkbrands_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get stored users
      const storedUsers = JSON.parse(localStorage.getItem('synkbrands_users') || '[]');
      const foundUser = storedUsers.find((u: any) => u.email === email);
      
      if (!foundUser) {
        return { success: false, error: 'No account found with this email. Please sign up.' };
      }
      
      if (foundUser.password !== password) {
        return { success: false, error: 'Incorrect password. Please try again.' };
      }
      
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('synkbrands_user', JSON.stringify(userWithoutPassword));
      
      return { success: true };
    } catch (error) {
      return { success: false, error: 'An error occurred. Please try again.' };
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get stored users
      const storedUsers = JSON.parse(localStorage.getItem('synkbrands_users') || '[]');
      
      // Check if user already exists
      if (storedUsers.some((u: any) => u.email === email)) {
        return { success: false, error: 'An account with this email already exists.' };
      }
      
      const newUser = {
        id: `user_${Date.now()}`,
        name,
        email,
        password,
        createdAt: new Date().toISOString(),
      };
      
      storedUsers.push(newUser);
      localStorage.setItem('synkbrands_users', JSON.stringify(storedUsers));
      
      const { password: _, ...userWithoutPassword } = newUser;
      setUser(userWithoutPassword);
      localStorage.setItem('synkbrands_user', JSON.stringify(userWithoutPassword));
      
      return { success: true };
    } catch (error) {
      return { success: false, error: 'An error occurred. Please try again.' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('synkbrands_user');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
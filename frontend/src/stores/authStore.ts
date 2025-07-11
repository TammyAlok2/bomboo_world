'use client';

import { create } from 'zustand'
import axios, { AxiosResponse } from 'axios';
import { WishList } from '@/types/WishList';
import axiosInstance from './axiosInstance'
import {toast} from 'react-toastify'
//

interface User {
  email: string;
  [key: string]: unknown; // Add more user properties if required
}

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  signup: (email: string, password: string, role: string, name: string) => Promise<void>;
  login: (email: string, password: string) => Promise<AxiosResponse<any, any> | undefined>;
  logout: () => Promise<AxiosResponse<any, any> | undefined>;
  forgotPassword: (email: string) => Promise<AxiosResponse<any, any> | undefined>;
  fetchUserDetails: () => Promise<AxiosResponse<any, any> | undefined>;
  googleSignIn: (data: any) => Promise<AxiosResponse<any, any> | undefined>;
  updateUserProfile: (data: Partial<User>) => Promise<AxiosResponse<any, any> | undefined>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoggedIn:false,
  signup: async (email: string, password: string, role: string, name: string) => {
    try {
      const response = await axiosInstance.post(`auth/register`, { email, password, role, name });
      
      if (response?.data?.success) {
        toast.success('Signup Successfully Please Verify Your Email')
        return response;
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // You can be more specific with the error message based on the error response
        const errorMessage = error.response?.data?.message || "Email Exists || Something Went Wrong";
        toast.error(errorMessage);
      } else {
        toast.error("Something Went Wrong");
      }
      // Either handle the error here and don't throw it
      // OR throw it but don't show a toast message here
      return null; // or handle the error as needed
    }
  },

  login: async (email, password) => {
    try {
      const response = await axiosInstance.post(`auth/login`, { email, password } , {withCredentials: true});
   //   console.log(response)
      set({ user: response.data.data.user ,isLoggedIn:true});
      
      //const token = response.data.data.token;//
     
      if (response?.data?.success) {
       toast.success('Login Successfully ')
        return response;
      }

    } catch (error: unknown) {

      if (axios.isAxiosError(error)) {
        console.log(error?.response)
       toast.error( 'Email Not Verified || Wrong Credentials');
      } else {
       toast.error( 'Email Not Verified || Wrong Credentials');
      }
    }
  },

  fetchUserDetails: async () => {
    try {
      const response = await axiosInstance.get(`auth/getUserDetails`, {withCredentials: true});
      set({ user: response.data.data ,isLoggedIn:true });

      if (response?.data?.success) {
        return response;
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
      //  toast.error(error.response?.data?.message || 'Login failed');
      } else {
      //  toast.error('An unexpected error occurred during login');
      }
    }
  },

  logout: async () => {
    try {
      const response = await axiosInstance.post(`auth/logout`,);
      console.log(response)
      set({ user: null });
      localStorage.clear()

      if (response?.data?.success) {
        toast.success('logout successful')
        return response;
      }

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Logout failed');
      } else {
        toast.error('An unexpected error occurred during login');
      }
    }
  },
  forgotPassword: async (email: string) => {
    try {
      const response = await axiosInstance.post(`auth/forget`, { email });
      return response;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Failed to send password reset email');
      } else {
        toast.error('An unexpected error occurred during password reset');
      }
    }
  },

  googleSignIn: async (data:any) => {
    try {
      const response = await axiosInstance.post(`auth/google-signin`,data);
     // const token = response.data.data.token;
       set({ user: response.data.data.user ,isLoggedIn:true});
   
      return response;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
     //   toast.error(error.response?.data?.message || 'Failed to login with google ');
      } else {
     //   toast.error('An unexpected error occurred during google login ');
      }
    }
  },

  updateUserProfile: async (data: Partial<User>) => {
    try {
      const response = await axiosInstance.post(`auth/update-user`, data);
      // toast.success(response.data.message || 'User Profile Updated Successfully');
      // Update the user in the store if applicable
      return response;
      set((state:any) => ({
        user: {
          ...state.user,
          ...data, // Merge updated data into existing user state
        },
      }));

      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Failed to update user profile');
        console.error('Update user profile error:', error.response?.data);
      } else {
        toast.error('An unexpected error occurred during user profile update');
        console.error('Unexpected error:', error);
      }
      throw error; // Propagate error to allow handling in the caller
    }
  },

}));

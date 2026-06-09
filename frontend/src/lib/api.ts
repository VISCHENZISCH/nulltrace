import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Types
export interface IpResponse {
  country: string;
  city: string;
  lat: number;
  lon: number;
  isp: string;
  asn: string;
  abuse_score: number;
  ports: number[];
}

export interface EmailResponse {
  valid: boolean;
  breaches: string[];
  platforms: string[];
  gravatar_url: string;
  risk_score: number;
}

export interface PhoneResponse {
  valid: boolean;
  country: string;
  carrier: string;
  line_type: string;
  region: string;
  lat: number | null;
  lon: number | null;
}

// Queries
export const useIpLookup = (address: string) => {
  return useQuery({
    queryKey: ['ip', address],
    queryFn: async (): Promise<IpResponse> => {
      if (!address) throw new Error("No address provided");
      const { data } = await api.get(`/ip/${address}`);
      return data;
    },
    enabled: false, // Wait for user action
    retry: false,
  });
};

export const useEmailLookup = (address: string) => {
  return useQuery({
    queryKey: ['email', address],
    queryFn: async (): Promise<EmailResponse> => {
      if (!address) throw new Error("No email provided");
      const { data } = await api.get(`/email/${address}`);
      return data;
    },
    enabled: false,
    retry: false,
  });
};

export const usePhoneLookup = (number: string) => {
  return useQuery({
    queryKey: ['phone', number],
    queryFn: async (): Promise<PhoneResponse> => {
      if (!number) throw new Error("No phone provided");
      const { data } = await api.get(`/phone/${encodeURIComponent(number)}`);
      return data;
    },
    enabled: false,
    retry: false,
  });
};

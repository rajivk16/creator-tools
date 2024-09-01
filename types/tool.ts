export interface Tool {
    id: number;
    name: string;
    description: string;
    features: Record<string, any>;
    pricing: string;
    category_id: number;
    average_rating: number;
    affiliate_link: string;
    created_at: string;
    updated_at: string;
  }
  
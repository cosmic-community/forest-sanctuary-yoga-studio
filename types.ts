// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Pages interface
export interface Page extends CosmicObject {
  type: 'pages';
  metadata: {
    page_title?: string;
    content?: string;
    hero_message?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    page_type?: {
      key: string;
      value: string;
    };
  };
}

// Instructor interface
export interface Instructor extends CosmicObject {
  type: 'instructors';
  metadata: {
    name?: string;
    bio?: string;
    specialties?: string;
    years_teaching?: number;
    favorite_quote?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    nature_connection?: string;
  };
}

// Studio Space interface
export interface StudioSpace extends CosmicObject {
  type: 'studio-spaces';
  metadata: {
    space_name?: string;
    description?: string;
    capacity?: number;
    special_features?: string;
    space_images?: Array<{
      url: string;
      imgix_url: string;
    }>;
    natural_light?: {
      key: string;
      value: string;
    };
  };
}

// Class interface
export interface YogaClass extends CosmicObject {
  type: 'classes';
  metadata: {
    class_name?: string;
    description?: string;
    schedule?: string;
    duration?: string;
    difficulty_level?: {
      key: string;
      value: string;
    };
    instructor?: Instructor;
    studio_space?: StudioSpace;
    class_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Membership interface
export interface Membership extends CosmicObject {
  type: 'memberships';
  metadata: {
    membership_name?: string;
    description?: string;
    price?: string;
    benefits?: string;
    best_for?: string;
    featured?: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards for runtime validation
export function isPage(obj: CosmicObject): obj is Page {
  return obj.type === 'pages';
}

export function isInstructor(obj: CosmicObject): obj is Instructor {
  return obj.type === 'instructors';
}

export function isStudioSpace(obj: CosmicObject): obj is StudioSpace {
  return obj.type === 'studio-spaces';
}

export function isYogaClass(obj: CosmicObject): obj is YogaClass {
  return obj.type === 'classes';
}

export function isMembership(obj: CosmicObject): obj is Membership {
  return obj.type === 'memberships';
}

// Type literals for select-dropdown values
export type PageType = 'home' | 'about' | 'contact' | 'general';
export type DifficultyLevel = 'gentle' | 'moderate' | 'deep' | 'all_levels';
export type NaturalLight = 'abundant' | 'soft' | 'candlelit';
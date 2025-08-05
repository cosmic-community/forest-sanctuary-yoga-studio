import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Helper functions for fetching data
export async function getHomePage() {
  try {
    const response = await cosmic.objects.findOne({
      type: 'pages',
      'metadata.page_type': 'home'
    }).props(['id', 'title', 'slug', 'metadata']);
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch home page');
  }
}

export async function getAllClasses() {
  try {
    const response = await cosmic.objects
      .find({ type: 'classes' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch classes');
  }
}

export async function getAllInstructors() {
  try {
    const response = await cosmic.objects
      .find({ type: 'instructors' })
      .props(['id', 'title', 'slug', 'metadata']);
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch instructors');
  }
}

export async function getAllStudioSpaces() {
  try {
    const response = await cosmic.objects
      .find({ type: 'studio-spaces' })
      .props(['id', 'title', 'slug', 'metadata']);
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch studio spaces');
  }
}

export async function getAllMemberships() {
  try {
    const response = await cosmic.objects
      .find({ type: 'memberships' })
      .props(['id', 'title', 'slug', 'metadata']);
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch memberships');
  }
}

export async function getContactPage() {
  try {
    const response = await cosmic.objects.findOne({
      type: 'pages',
      'metadata.page_type': 'contact'
    }).props(['id', 'title', 'slug', 'metadata']);
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch contact page');
  }
}
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
	projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
	dataset: 'production',
	apiVersion: '2023-01-13',
	useCdn: true,
	token: import.meta.env.VITE_APP_SANITY_TOKEN,
	// plugin_name: 'snaps',
});

const builder = imageUrlBuilder(client);

// Necessary for working with images in sanity
export const urlFor = source => builder.image(source);

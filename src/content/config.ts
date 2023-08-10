import { z, defineCollection } from 'astro:content';
import { ISO_3166_ALPHA_2_CODES } from '~/util/iso3166';

const linkSchemaPart = {
  text: z.string(),
  link: z.string(),
};

/**
 * Navigation
 */

export const navigationSchema = z.object({
  items: z.array(
    z.object({
      ...linkSchemaPart,
      children: z.array(z.object(linkSchemaPart)).optional(),
    })
  ),
});

const navigationCollection = defineCollection({
  type: 'data',
  schema: navigationSchema,
});

/**
 * Blog (aka posts)
 */

const tags = z
  .array(z.string())
  .optional()
  .transform((val) => val?.map((tag) => tag.toLowerCase()));

export const blogSchema = z.object({
  title: z.string(),
  author: z.string().optional(),
  day: z.number().optional(),
  month: z.number(),
  year: z.number(),
  tags,
});

const blogCollection = defineCollection({
  type: 'content',
  schema: blogSchema,
});

/**
 * Grants
 */

export const grantSchema = z.object({
  name: z.string(),
  day: z.number().optional(),
  month: z.number().optional(),
  year: z.number(),
  country: z.string().optional(),
  tags,
});

const grantCollection = defineCollection({
  type: 'content',
  schema: grantSchema,
});

/**
 * Events
 */

export const eventSchema = z.object({
  title: z.string(),
  day: z.number(),
  month: z.number(),
  year: z.number(),
  time: z.string(),
  speaker: z.string(),
  image: z.string().optional(),
});

const eventCollection = defineCollection({
  type: 'content',
  schema: eventSchema,
});

/**
 * Jobs
 */

export const jobSchema = z.object({
  title: z.string(),
});

const jobCollection = defineCollection({
  type: 'content',
  schema: jobSchema,
});

/**
 * Supporters
 */

export const supporterSchema = z.object({
  supporters: z.array(
    z.object({
      title: z.string(),
      url: z.string().url().optional(),
      imageId: z.string().optional(),
    })
  ),
});

const supporterCollection = defineCollection({
  type: 'data',
  schema: supporterSchema,
});

/**
 * Advisors
 */

export const advisorSchema = z.object({
  advisors: z.array(
    z.object({
      title: z.string(),
      url: z.string().url().optional(),
    })
  ),
});

const advisorCollection = defineCollection({
  type: 'data',
  schema: advisorSchema,
});

/**
 * Team
 */

export const teamSchema = z.object({
  team: z.array(
    z.object({
      title: z.string(),
      url: z.string().url().optional(),
    })
  ),
});

const teamCollection = defineCollection({
  type: 'data',
  schema: teamSchema,
});

export const collections = {
  navigation: navigationCollection,
  blog: blogCollection,
  grant: grantCollection,
  event: eventCollection,
  job: jobCollection,
  supporter: supporterCollection,
  advisor: advisorCollection,
  team: teamCollection,
};

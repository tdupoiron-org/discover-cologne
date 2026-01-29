import { TFunction } from 'i18next'
import { Site } from '../types/site'

export const getTranslatedSiteName = (site: Site, t: TFunction): string => {
  const key = `site_${site.id}_name`
  return t(key, { defaultValue: site.name })
}

export const getTranslatedSiteDescription = (site: Site, t: TFunction): string => {
  const key = `site_${site.id}_description`
  return t(key, { defaultValue: site.description })
}

export const getTranslatedSiteDuration = (site: Site, t: TFunction): string => {
  const key = `site_${site.id}_duration`
  return t(key, { defaultValue: site.duration })
}

export const getTranslatedCategory = (category: string, t: TFunction): string => {
  const key = `category_${category.toLowerCase().replace(/\s+/g, '-')}`
  return t(key, { defaultValue: category })
}

export const getTranslatedCrowdLevel = (crowdLevel: string, t: TFunction): string => {
  const key = `crowd_level_${crowdLevel}`
  return t(key, { defaultValue: crowdLevel })
}

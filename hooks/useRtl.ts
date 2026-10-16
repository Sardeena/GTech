'use client';

import { useEffect, useMemo, useState } from 'react';

export type LocaleType = 'en' | 'ar' | string;
export type DirectionType = 'ltr' | 'rtl';

const RTL_LOCALES = new Set(['ar', 'fa', 'he', 'ur', 'ar-EG', 'ar_EG']);

/**
 * Determines whether a given locale string corresponds to a Right-to-Left writing direction.
 */
export function isRtlLocale(locale?: string): boolean {
  if (!locale) return false;
  const normalized = locale.toLowerCase().trim();
  if (RTL_LOCALES.has(normalized)) return true;
  const primarySubtag = normalized.split(/[-_]/)[0];
  return RTL_LOCALES.has(primarySubtag);
}

export interface UseRtlReturn {
  isRtl: boolean;
  direction: DirectionType;
  locale: string;
  alignStart: 'left' | 'right';
  alignEnd: 'right' | 'left';
  flexRowReverseClass: string;
  arrowTransformClass: string;
}

/**
 * Custom hook to detect document direction based on current locale state
 * and automatically keep document.documentElement attributes in sync.
 */
export function useRtl(locale: LocaleType = 'en'): UseRtlReturn {
  const isRtl = useMemo(() => isRtlLocale(locale), [locale]);
  const direction: DirectionType = isRtl ? 'rtl' : 'ltr';

  // Synchronize document direction with active locale on the client
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', direction);
      document.documentElement.setAttribute('lang', locale);
      document.documentElement.classList.toggle('rtl', isRtl);
      document.documentElement.classList.toggle('ltr', !isRtl);
    }
  }, [direction, isRtl, locale]);

  return {
    isRtl,
    direction,
    locale,
    alignStart: isRtl ? 'right' : 'left',
    alignEnd: isRtl ? 'left' : 'right',
    flexRowReverseClass: isRtl ? 'flex-row-reverse' : 'flex-row',
    arrowTransformClass: isRtl ? 'scale-x-[-1]' : '',
  };
}

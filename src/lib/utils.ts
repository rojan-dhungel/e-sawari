import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge class names conditionally.
 * Works great with Tailwind and cva (class-variance-authority).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
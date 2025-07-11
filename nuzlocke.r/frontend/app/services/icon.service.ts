import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private iconCache = new Map<string, string>();
  private loadingPromises = new Map<string, Promise<string>>();

  // Icon mappings with their URLs
  private iconPaths = {
    'pokeball-1': '/pokeball-1.png',
    'pokeball-2': '/pokeball-2.png',
    'pc-1': '/pc-1.png',
    'pc-2': '/pc-2.png',
    'kill-1': '/kill-1.png',
    'release-3': '/release-3.png',
    'release-5': '/release-5.png'
  };

  constructor() {
    // Preload critical icons on service initialization
    this.preloadCriticalIcons();
  }

  /**
   * Get icon URL with caching
   */
  getIconUrl(iconName: keyof typeof this.iconPaths): string {
    return this.iconPaths[iconName] || '';
  }

  /**
   * Preload an icon to improve loading performance
   */
  private preloadIcon(iconName: string, url: string): Promise<string> {
    if (this.iconCache.has(iconName)) {
      return Promise.resolve(this.iconCache.get(iconName)!);
    }

    if (this.loadingPromises.has(iconName)) {
      return this.loadingPromises.get(iconName)!;
    }

    const promise = new Promise<string>((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.iconCache.set(iconName, url);
        this.loadingPromises.delete(iconName);
        resolve(url);
      };
      img.onerror = () => {
        this.loadingPromises.delete(iconName);
        reject(new Error(`Failed to load icon: ${iconName}`));
      };
      img.src = url;
    });

    this.loadingPromises.set(iconName, promise);
    return promise;
  }

  /**
   * Preload all critical icons
   */
  private preloadCriticalIcons(): void {
    Object.entries(this.iconPaths).forEach(([name, url]) => {
      this.preloadIcon(name, url);
    });
  }

  /**
   * Check if icon is loaded and cached
   */
  isIconCached(iconName: keyof typeof this.iconPaths): boolean {
    return this.iconCache.has(iconName);
  }

  /**
   * Get all icon names for reference
   */
  getAvailableIcons(): string[] {
    return Object.keys(this.iconPaths);
  }
} 
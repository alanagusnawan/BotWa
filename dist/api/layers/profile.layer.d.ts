import { Page } from 'puppeteer';
import { HostLayer } from './host.layer';
export declare class ProfileLayer extends HostLayer {
    page: Page;
    constructor(page: Page);
    /**
      * Change the theme
      * @param string types "dark" or "light"
      */
    setTheme(type: string): Promise<boolean>;
    /**
     * Sets current user profile status
     * @param status
     */
    setProfileStatus(status: string): Promise<void>;
    /**
     * Sets the user's current profile photo
     * @param name
     */
    setProfilePic(data: string): Promise<boolean>;
    /**
     * Sets current user profile name
     * @param name
     */
    setProfileName(name: string): Promise<void>;
}

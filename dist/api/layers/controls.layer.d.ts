import { Page } from 'puppeteer';
import { UILayer } from './ui.layer';
export declare class ControlsLayer extends UILayer {
    constructor(page: Page);
    /**
    * Unblock contact
    * @param contactId {string} id '000000000000@c.us'
    * @returns boolean
    */
    unblockContact(contactId: string): Promise<boolean>;
    /**
     * Block contact
     * @param contactId {string} id '000000000000@c.us'
     * @returns boolean
     */
    blockContact(contactId: string): Promise<boolean>;
    /**
       * puts the chat as unread
       * @param contactId {string} id '000000000000@c.us'
       * @returns boolean
       */
    markUnseenMessage(contactId: string): Promise<boolean>;
    /**
     * Deletes the given chat
     * @param chatId {string} id '000000000000@c.us'
     * @returns boolean
     */
    deleteChat(chatId: string): Promise<boolean>;
    /**
     * Deletes all messages of given chat
     * @param chatId
     * @returns boolean
     */
    clearChat(chatId: string): Promise<void>;
    /**
     * Deletes message of given message id
     * @param chatId The chat id from which to delete the message.
     * @param messageId The specific message id of the message to be deleted
     * @param onlyLocal If it should only delete locally (message remains on the other recipienct's phone). Defaults to false.
     */
    deleteMessage(chatId: string, messageId: string[] | string, onlyLocal?: boolean): Promise<any>;
}

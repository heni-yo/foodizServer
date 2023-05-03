import { Request } from "express";

export {};

declare global {
    interface MyCtx{
        req:Request & { session: { userId?: number } }
    }
}
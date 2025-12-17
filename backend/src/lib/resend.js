import {Resend} from 'resend';
import {ENV} from "./env.js";


export const resendClient= new Resend(ENV.RESEND_API_KEY);

export const sender={
    email:ENV.EMIAL_FROM,
    name: ENV.EMIAL_FROM_NAME,
}

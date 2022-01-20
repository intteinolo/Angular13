import { JwtDecoder } from "./jwt-decoder";

export class GenericObject {
    jwtDecoder = new JwtDecoder();
    jsonAnswer: any = [];
    stringAnswer: string;

    logOut() {
        this.jwtDecoder.deleteToken();
    }
}
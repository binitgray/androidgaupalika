import API from './api';
import request from '../config/request';
import { ApiEndPoints } from '../config/apiconfig';
;
interface ApiResponse {
    data?: any;
    Message: string;
    code: number;
}



class AndroidService {
    public async Settings(): Promise<any> {
        try {
            const res = await (await request()).get(API.Setting);
          return await res.data;
          
        }
        catch (error:any) {
            return {
                Message: error?.message,
                code: error?.code,
                data: null,
            }
        }
    }
    public async Weather(): Promise<any> {
        try {
            const res = await (await request()).get(ApiEndPoints.weatherUrl);
          return await res.data;
          
        }
        catch (error:any) {
            return {
                Message: error?.message,
                code: error?.code,
                data: null,
            }
        }
    }

    public async Screens(): Promise<any> {
        try {
            const res = await (await request()).get(API.Screens);
          return await res.data;
          
        }
        catch (error:any) {
            return {
                Message: error?.message,
                code: error?.code,
                data: null,
            }
        }
    }
    public async Screens1(): Promise<any> {
        try {
            const res = await (await request()).get(API.Screen1);
          return await res.data;
          
        }
        catch (error:any) {
            return {
                Message: error?.message,
                code: error?.code,
                data: null,
            }
        }
    }
    public async Videos(): Promise<any> {
        try {
            const res = await (await request()).get(API.Video);
          return await res.data;
          
        }
        catch (error:any) {
            return {
                Message: error?.message,
                code: error?.code,
                data: null,
            }
        }
    }
    public async GeneralImages(path:string): Promise<any> {
        try {
            const res = await (await request()).get(API.GeneralImages+"/"+path);
          return await res.data;
          
        }
        catch (error:any) {
            return {
                Message: error?.message,
                code: error?.code,
                data: null,
            }
        }
    }
    
   
}

const AndroidServices=new AndroidService();
export default AndroidServices
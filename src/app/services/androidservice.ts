import API from './api';
import request from '../config/request';
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
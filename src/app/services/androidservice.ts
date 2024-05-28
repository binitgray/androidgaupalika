import API from './api';
import request from '../config/request';
;
interface ApiResponse {
    data?: any;
    Message: string;
    code: number;
}



class AndroidService {
    public async Settings(): Promise<ApiResponse> {
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
    public async Screens(): Promise<ApiResponse> {
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
    public async Videos(): Promise<ApiResponse> {
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
    public async GeneralImages(): Promise<ApiResponse> {
        try {
            const res = await (await request()).get(API.GeneralImages);
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
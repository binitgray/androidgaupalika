import API from './api';
import request from '../config/request';
import { ApiEndPoints } from '../config/apiconfig';
import requesetManager from '../config/requetManager';
;
interface ApiResponse {
    Data?: any;
    Message: string;
    Code: number;
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
    public async GetTeamsListbyKey(pageNo: number, pageSize: number, key: string, language?: string): Promise<ApiResponse> {
        try {
            const resp = await (await requesetManager()).get(API.TeamsFromKey + "?pageNo=" + pageNo + "&pageSize=" + pageSize + "&key=" + key + "&language=" + language)            
            return resp.data

        } catch (error: any) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }
        }
    }
    
   
}

const AndroidServices=new AndroidService();
export default AndroidServices
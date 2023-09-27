import axios from 'axios';

export default class DashboardServices {
   static async getUserInfo(userId: string) {
      const res = await axios.get(`/api/dashboard/${userId}`);

      return res.data;
   }
}

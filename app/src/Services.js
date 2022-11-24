import axios from "axios";
const url = "";

export default class services {
  //to get all dishes
  static async getAllDishes() {
    const res = await axios.get(url);
    return res.data;
  }
  //to get single dish with id
  static async getDishById() {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }
  //to Add or update the dish
  static async addDish(dish) {
    const res = await axios.put(url, dish);
    return res.data;
  }
  //to  update the dish
  static async editDish(id, dish) {
    const res = await axios.put(`${url}`/`${id}`, dish);
    return res.data;
  }
  //to  update the dish
  static async deleteDish(id, dish) {
    const res = await axios.delete(`${url}`/`${id}`, dish);
    return res.data;
  }
}

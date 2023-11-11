import ServiceRepository from "../repositories/ServiceRepository.js";
import ActivityRepository from "../repositories/ActivityRepository.js";

class ServiceController{
    constructor() {
        this.serviceRepository = new ServiceRepository();
        this.activityRepository = new ActivityRepository();
    }
    async createService(req, res){
        try{
            console.log(req.body);
            await this.serviceRepository.create(req.body);
            return res.status(200).json({
                message: "Done!"
            })
        }
        catch(error){
            return res.status(400).json({
                message: "There as an error creating the service"
            })
        }
    }
    async getServices(req, res){
        try{
            const services = await this.serviceRepository.getAll();
            return res.status(200).json(services);
        }
        catch(error){
            return res.status(400).json({
                message: error
            })
        }
    }
    async getServiceById(req, res){
        try{
            const service = await this.serviceRepository.getById(req.params.id);
            return res.status(200).json(service);
        }
        catch(error){
            return res.status(400).json({
                message: "There is an error getting the service by id"
            })
        }
    }
    async deleteServiceById(req, res){
        try{
            await this.serviceRepository.deleteById(req.params.id);
            return res.status(200).json({
                message: "Deleted correctly!"
            })
        }
        catch(error){
            return res.status(400).json({
                message: "There is an error deleting the service by id"
            })
        }
    }
    async updateServiceById(req, res){
        try{
            await this.serviceRepository.updateById(req.params.id, req.body);
            return res.status(200).json({
                message: "Updated correctly!"
            })
        }
        catch(error){
            return res.status(400).json({
                message: "There is an error updating the service by id"
            })
        }
    }
    async getActivitiesByServiceId(req, res){
        try{
            const activities = await this.activityRepository.getByServiceId(req.params.id);
            return res.status(200).json(activities);
        }
        catch(error){
            return res.status(400).json({
                message: "There is an error getting the activities by the service id"
            })
        }
    }
    async getServicesByName(req, res){
        try{
            const services = await this.serviceRepository.getByName(req.params.name);
            return res.status(200).json(services);
        }
        catch(error){
            return res.status(400).json({
                message: "There is an error getting the servcices by name",
                error
            })
        }
    }
}

export default ServiceController;
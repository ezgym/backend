import AgencyRepository from "../repositories/AgencyRepository.js";
import ServiceRepository from "../repositories/ServiceRepository.js";
import ReviewRepository from "../repositories/ReviewRepository.js";
import HiredServiceRepository from "../repositories/HiredServiceRepository.js";

class AgencyController{
    constructor() {
        this.agencyRepository = new AgencyRepository();
        this.serviceRepository = new ServiceRepository();
        this.reviewRepository = new ReviewRepository();
        this.hiredServiceRepository = new HiredServiceRepository();
    }
    async getAllAgencies(req, res){
        try{
            const agencies = await this.agencyRepository.getAll();
            return res.status(200).json(agencies);
        }
        catch(error){
            return res.status(400).json({
                message: "There is an error getting the agencies"
            })
        }
    }
    async getAgencyById(req, res) {
        try{
            const agency = await this.agencyRepository.getById(req.params.id);
            return res.status(200).json(agency);
        }
        catch(error){
            return res.status(400).json({
                message: "There is an error getting the agency"
            })
        }
    }
    async getServicesByAgencyId(req, res){
        try{
            const services = await this.serviceRepository.getByAgencyId(req.params.id);
            return res.status(200).json(services);
        }
        catch(error){
            return res.status(400).json({
                message: error
            })
        }
    }
    async getReviewsByAgencyId(req, res){
        try{
            const reviews = await this.reviewRepository.getByAgencyId(req.params.id);
            return res.status(200).json(reviews);
        }
        catch(error){
            return res.status(400).json(error);
        }
    }
    async getHiredServicesByAgencyId(req, res) {
        try{
            const hiredServices = await this.hiredServiceRepository.getByAgencyId(req.params.id);
            return res.status(200).json(hiredServices);
        }
        catch(error){
            return res.status(400).json(error);

        }
    }

};

export default AgencyController;
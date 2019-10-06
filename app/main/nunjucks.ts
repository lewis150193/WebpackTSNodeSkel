import nunjucks from "nunjucks";
import path from "path";

export const nunjucksSetup = (app: any) => {
    // PATH TO TEMPLATES.
    // You can add multiple paths by using an array.
    const PATH_TO_TEMPLATES = "./views";
    const PATH_TO_ASSESTS = "./assets/images";
    const GOVUK = path.resolve("node_modules/govuk-frontend/")
    nunjucks.configure([GOVUK, PATH_TO_TEMPLATES, PATH_TO_ASSESTS], {
        autoescape: true,
        express: app,
    });
};

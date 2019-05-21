import config from "./configs";
import { registerPlugins } from "webiny-plugins";
import installer from "webiny-install";

import securityPlugins from "webiny-api-security/install/plugins";
import cmsPlugins from "webiny-api-cms/install/plugins";

registerPlugins(securityPlugins, cmsPlugins);

export const install = async (context = {}) => {
    await installer({ ...context, config: await config() });
    process.exit();
};

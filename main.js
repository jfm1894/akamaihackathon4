import { logger } from 'log';

const teamName = 'hackathon4';

export function onClientRequest(request) {
    // Outputs a message to the X-Akamai-EdgeWorker-onClientRequest-Log header.
    if(request.query === "mph=88&gigawatts=1.21"){
        request.respondWith(302, {"location":"https://web.archive.org/web/20160305182237/https://www.oreillyauto.com/site/c/home.oap"}, "");
    } else {
        request.respondWith(302,{"location": "https://www.oreillyauto.com/flux-capacitor"}, "");
    }
    // request.respondWith(200, {}, `Hello World From ${teamName}`);
}

export function onClientResponse(request, response) {
    // Outputs a message to the X-Akamai-EdgeWorker-onClientResponse-Log header.
    logger.log('Adding a header in ClientResponse');
    response.setHeader('X-Hello-World', `Hellow World From ${teamName}`);
}
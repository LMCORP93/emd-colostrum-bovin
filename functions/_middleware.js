export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === 'emd-colostrum-bovin.pages.dev' || url.hostname === 'www.colostrum-bovin.fr') {
    url.hostname = 'colostrum-bovin.fr';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}

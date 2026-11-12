export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/health') {
      return Response.json({
        ok: true,
        service: 'svsweb-platform',
        phase: 'architecture-foundation',
        timestamp: new Date().toISOString()
      });
    }

    return Response.json(
      { ok: false, message: 'Not found' },
      { status: 404 }
    );
  }
};

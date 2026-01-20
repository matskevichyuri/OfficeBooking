namespace OfficeBooking.Api.Extensions
{
    public static class HttpContextExtensions
    {
        public static string GetUserLogin(this HttpContext context)
        {
            return context.Request.Headers["X-User-Login"].FirstOrDefault()
                   ?? "unknown";
        }
    }
}

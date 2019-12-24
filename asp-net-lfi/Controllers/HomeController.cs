using System;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using asp_net_lfi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace asp_net_lfi.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
            => _logger = logger;

        public IActionResult Index()
            => View();

        [HttpPost]
        public async Task<IActionResult> Index(FileModel file)
        {
            ViewBag.FilePath = file.Path;
            try
            {
                var targetFilePath = Path.Combine(AppContext.BaseDirectory, file.Path);
                if (Directory.Exists(targetFilePath)) ViewBag.Response = "Target is a directory.";
                _logger.LogInformation($"Attempting to read {targetFilePath}...");
                await using var fs = System.IO.File.OpenRead(targetFilePath);
                Memory<byte> memory = new byte[36];
                await fs.ReadAsync(memory).ConfigureAwait(false);
                var content = Encoding.UTF8.GetString(memory.Span).Trim();
                ViewBag.Response = content;
            }
            catch (Exception ex)
            {
                ViewBag.Response = ex.Message;
            }

            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
            => View(new ErrorViewModel {RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier});
    }
}
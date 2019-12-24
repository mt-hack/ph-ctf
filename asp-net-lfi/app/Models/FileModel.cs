
using System.ComponentModel.DataAnnotations;

namespace asp_net_lfi.Models
{
    public class FileModel
    {
        [Required(ErrorMessage = "You need to tell me what to get!")]
        public string Path { get; set; }
    }
}
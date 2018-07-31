using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace GallowayTechAngularPhotoAlbum.Controllers
{
    [Route("api/[controller]")]
    public class PhotoController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Photo> GetPhotos()
        {
            var photos = new List<Photo>()
            {
                new Photo()
                {
                    FileName = "Buddy",
                    Caption = "My Couch",
                    DirectoryName = "root",
                    FullPath = "full",
                    Url = "gallowaytech",
                    Size = "thumb",
                    SearchText = "Dogs",
                    IsPublic = true,
                    DateCreated = DateTime.Now,
                    DateUpdated = DateTime.Now
                }
            };

            return photos;
        }

        public partial class Photo
        {
            public int PhotoId { get; set; }
            public string FileName { get; set; }
            public string Caption { get; set; }
            public string DirectoryName { get; set; }
            public string FullPath { get; set; }
            public string Url { get; set; }
            public string Size { get; set; }
            public string SearchText { get; set; }
            public bool IsPublic { get; set; }
            public System.DateTime DateCreated { get; set; }
            public System.DateTime DateUpdated { get; set; }

            public int AlbumId { get; set; }
        }
    }
}

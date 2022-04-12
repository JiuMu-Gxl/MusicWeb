using Acme.Music.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Acme.Music.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class MusicController : AbpControllerBase
{
    protected MusicController()
    {
        LocalizationResource = typeof(MusicResource);
    }
}

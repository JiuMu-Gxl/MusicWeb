using System;
using System.Collections.Generic;
using System.Text;
using Acme.Music.Localization;
using Volo.Abp.Application.Services;

namespace Acme.Music;

/* Inherit your application services from this class.
 */
public abstract class MusicAppService : ApplicationService
{
    protected MusicAppService()
    {
        LocalizationResource = typeof(MusicResource);
    }
}

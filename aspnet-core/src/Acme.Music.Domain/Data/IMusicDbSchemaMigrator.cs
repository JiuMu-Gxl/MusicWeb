using System.Threading.Tasks;

namespace Acme.Music.Data;

public interface IMusicDbSchemaMigrator
{
    Task MigrateAsync();
}

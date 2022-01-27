const versionComparer = (version, currentVersion) => {
  version = version.slice(1);
  currentVersion = currentVersion.slice(1);

  const [supVersion, subVersion] = version.split('-');
  const [supCurrent, subCurrent] = currentVersion.split('-');
  return !(supCurrent > supVersion || subCurrent > subVersion);
};

module.exports = versionComparer;

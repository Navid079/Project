const versionComparer = (version, currentVersion) => {
  const [supVersion, subVersion] = version.split('-');
  const [supCurrent, subCurrent] = currentVersion.split('-');
  return !(supCurrent > supVersion || subCurrent > subVersion);
};

export default versionComparer;

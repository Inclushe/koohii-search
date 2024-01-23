# Koohii Instant Search

## Todo

- [x] Update favicon and title
- [x] autofocus
- [x] Keyword search
  - [x] Multiple keyword search
  - [x] Frame number search
- [x] Investigate error with searching 域
  - [x] when no story is found?
- [x] range search showing as strange
  - [x] Update keyword search algo to use startsWith instead of includes
- [ ] Redo search algo
  - [ ] "hair on the head"
  - [ ] Implement prepopulate algorithm in XState
  - [ ] https://stately.ai/registry/editor/3dff0b0d-9ad3-45c9-942a-a9e286e189b6?machineId=63edce10-3f32-4565-aeb5-4f90a3f283f3&mode=Design
- [ ] Empty state
- [ ] Error state
- [ ] Implement ?query= in URL
  - [ ] useEffect
- [ ] Parse curly braces
  - [ ] Example: 贄
  - [ ] Link to ?query=贄
- [ ] Uploading stories
  - [ ] Have empty state using keywords-rtk-1.20230411b.js
  - [ ] Upload to local storage
  - [ ] Stories may not have all keywords, so merge stories with keywords-rtk-1.20230411b.js
- [ ] Jisho and Koohii links
- [ ] Search and clear icons on search bar
- [ ] Grab alternate keywords
  - https://web.archive.org/web/20100511002740/http://www.tanos.co.uk/jlpt/jlpt1/kanji/
  - Only display alternate keywords, don't use in keyworks to kanji search
- [ ] Clipboard watcher
  - [ ] https://github.com/themoeway/yomitan/blob/55897b2b29e88ffd0c9140d03b9e74c4a94d98bd/ext/js/comm/clipboard-reader.js#L64
- [ ] Options?
  - [ ] Custom fonts?
  - [ ] Handle uploading stories

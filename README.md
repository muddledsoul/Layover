# Layover - Spanish, French, Italian & German speaking tutor (iPhone PWA)

Roleplay conversations in Spanish (Mexico, Colombia, Central America), French or German with
pronunciation scoring (Azure), sentence corrections + natural rephrasing (Claude),
and native-voice replies.


## Languages: Spanish, French, Italian, German

Pick the language on first launch; switch any time in **Settings → Language you're learning** (the app reloads in that language). Each language keeps its own progress, vocab, game scores, training plan, level and tutor accent. Keys, budget and sound settings are shared.

- **Spanish:** Mexico, Colombia and Central American voices; graded against es-MX.
- **French:** France, Québec, Belgium and Switzerland voices; graded against fr-FR (fr-CA for Québec).
- **Italian:** Italy voices; graded against it-IT. Grammar: Essere vs Avere, Il o la?, Where is it?
- **German:** Germany, Austria and Switzerland voices; graded against de-DE.
- All vocab sets, games and scenes are translated, with a respelled "How to say it" and sound tips for each language.
- Grammar for French: Être vs Avoir, Le ou la?, Where is it? Grammar for German: Sein vs Haben, Der/die/das, Where is it? (with dative articles).

## Demo (no keys)

On Setup, **Try the demo** (or Settings → Demo mode) unlocks every vocab set, scene game and grammar lesson using the phone's built-in voice, and Safari speech recognition for the speaking games when the browser allows it (otherwise those are greyed out). The AI Conversation Partner and training plans stay locked until keys are added. Nothing practiced in demo mode is saved; turning it off restores your keys and progress.

## Look

Each language is a destination at dusk: Mexican plaza under papel picado (Spanish), Paris rooftops at blue hour (French), an Alpine lake village (German). The home screen greets you in that language with a postmark date; Setup shows all three as postcards above the key setup guides.

## Home menu

Start today's session · Vocabulary · Essential grammar · AI Conversation Partner (scenarios, level, accent, voice and speed live on that screen).

*Layover*: a few minutes of speaking practice wherever you are. (The app was first called Hablemos; the repo and saved data keep that name.)

## One-time setup (~10 min)
1. **Azure Speech (free F0 tier)**: portal.azure.com -> Create resource -> "Speech service"
   -> Pricing tier **Free F0**, region **East US**. Open it -> Keys and Endpoint -> copy KEY 1 and the region.
   Free tier: 5 audio hrs/month recognition + 0.5M chars/month voice. Plenty for daily practice.
2. **Claude API key**: console.anthropic.com -> API Keys -> create. Add ~$5 credit; a 15-min session is a few cents.
3. Host these files over HTTPS (needed for the mic on iPhone). Easiest: a GitHub Pages repo.
4. On iPhone, open the URL in Safari -> Share -> **Add to Home Screen**.
5. First launch opens Settings: paste both keys + region -> **Test keys**.

Keys live only in the phone's browser storage, never in the code/repo.

## Using it
- Pick a scenario (or Custom), level, tutor accent/voice/speed -> Start. Or tap **Start today's session** to run the next item in your training plan.
- Tap mic, speak, tap again to send. **✕ Clear & redo** throws away a bad recording while you're still talking. **↩︎ Try that one again** (under your last message) unsends your answer and the tutor's reply so you can answer that question again; tap it repeatedly to step back further.
- Words are underlined green / yellow / red; tap one to hear it.
- Feedback card: scores, corrected sentence, "more natural" version, pronunciation tips (each with play).
- ❓ = ask anything in English (typed or spoken): meanings, "how do I say...", grammar. Then **Practice saying it** for a scored attempt. **❓ Explain** on any tutor line breaks it down.
- 💡 = suggested next line. ⌨︎ = type instead. **Review** = end-of-session summary + phrases to keep (runs automatically when you leave).

## Vocabulary (🃏 on the home screen)
20 picture sets (incl. Car parts & tools, Feelings, Weather, Actions). Each set has:
- **Learn**: 5 words at a time as flashcards (hear, slow, repeat-after-me), then a quick check until you get them.
- **Multiple choice**: picture -> word and word -> picture; misses come back.
- **Matching**: 6 pairs per round, timed (+3s per miss).
- **Find it**: a helper in a scene asks for every word in the set out loud; tap it. Found items disappear and the spot refills until you have found them all.
- **Name it**: an item lights up (bigger, bouncing) in a scene; say it. 3 tries per item. Scored on accuracy (50 / 30 / 15 by try), pronunciation (30), speed (20).
- **Say it**: picture only; cards you say without peeking leave the deck.
- **List**: every word in the set (picture, Spanish, English, search box). Tap one to open its card: how to say it, hear it, repeat-after-me feedback, previous/next.
Scenes (market, office, computer store, mechanic shop, kitchen, restaurant, home, clothing store, farm, street, paint shop, park, weather report) are also listed under the sets.

## Grammar (📐 on the home screen)
- **Ser vs Estar**: Lesson (DOCTOR vs PLACE, conjugations, words whose meaning changes), Multiple choice (20 blanks, each answer explains the rule), 60-second Ser-or-Estar sprint with streak multipliers, and Say it (see English, say the full Spanish sentence; it flags the wrong verb).
- **-ando / -iendo (I am ___ing)**: Lesson (estar + gerund, -ar/-er/-ir endings, irregulars like leyendo/durmiendo/pidiendo/yendo), Form it (pick the right -ing form), Say it ("I'm driving" -> "Estoy manejando"), and an Actions vocab set (40 activities) with a Busy plaza scene.
- **Where is it? (location)**: 15 phrases (encima de, arriba de, debajo de, al lado de, enfrente de, detrás de, dentro de, entre, cerca de, lejos de, a la derecha / izquierda de, aquí / ahí / allá) with drawn pictures. Lesson (incl. de + el = del), ¿Dónde está? quiz, Listen & tap, Say it.

## Progress & training (📈 on the home screen)
- Every session's scores, % correct sentences and minutes are saved after each turn.
- Reviews track **weak spots**. The tutor steers future conversations so you practice them. Two good sessions in a row moves a spot to Mastered.
- **Tricky words** you often mispronounce get worked into the tutor's lines.
- **Training plan**: 5 targeted sessions built from your history. Rebuild it when you finish.
- **Level-up targets** (last 5 sessions at your level):
  - Beginner -> Intermediate: 8 sessions, pronunciation 75+, 55%+ correct, 3 or fewer open weak spots
  - Intermediate -> Advanced: 12 sessions, pronunciation 82+, 65%+ correct, 3 or fewer open weak spots
- Progress lives on the phone only. Use **Export** / **Import** on the Progress page to back it up.

## Note on accents
Azure's pronunciation grader supports es-MX (and es-ES) only, so your speech is always graded
against Mexican Spanish. The tutor's voice, vocabulary and slang follow whichever country you pick.

// ספר התהילים - נתוני פרקים בסיסיים
window.tehillimChapters = {
    1: { chapters: 'א-ט', hebrew: 'פרקים א-ט' },
    2: { chapters: 'י-יז', hebrew: 'פרקים י-יז' },
    3: { chapters: 'יח-כב', hebrew: 'פרקים יח-כב' },
    4: { chapters: 'כג-כח', hebrew: 'פרקים כג-כח' },
    5: { chapters: 'כט-לד', hebrew: 'פרקים כט-לד' },
    6: { chapters: 'לה-לח', hebrew: 'פרקים לה-לח' },
    7: { chapters: 'לט-מג', hebrew: 'פרקים לט-מג' },
    8: { chapters: 'מד-מח', hebrew: 'פרקים מד-מח' },
    9: { chapters: 'מט-נד', hebrew: 'פרקים מט-נד' },
    10: { chapters: 'נה-נט', hebrew: 'פרקים נה-נט' },
    11: { chapters: 'ס-סד', hebrew: 'פרקים ס-סד' },
    12: { chapters: 'סה-סח', hebrew: 'פרקים סה-סח' },
    13: { chapters: 'סט-עא', hebrew: 'פרקים סט-עא' },
    14: { chapters: 'עב-עו', hebrew: 'פרקים עב-עו' },
    15: { chapters: 'עז-פב', hebrew: 'פרקים עז-פב' },
    16: { chapters: 'פג-פז', hebrew: 'פרקים פג-פז' },
    17: { chapters: 'פח-פט', hebrew: 'פרקים פח-פט' },
    18: { chapters: 'צ-צו', hebrew: 'פרקים צ-צו' },
    19: { chapters: 'צז-קג', hebrew: 'פרקים צז-קג' },
    20: { chapters: 'קד-קה', hebrew: 'פרקים קד-קה' },
    21: { chapters: 'קו-קט', hebrew: 'פרקים קו-קט' },
    22: { chapters: 'קי-קיב', hebrew: 'פרקים קי-קיב' },
    23: { chapters: 'קיג-קיח', hebrew: 'פרקים קיג-קיח' },
    24: { chapters: 'קיט', hebrew: 'פרק קיט (הפרק הארוך)' },
    25: { chapters: 'קכ-קלד', hebrew: 'פרקים קכ-קלד' },
    26: { chapters: 'קלה-קלב', hebrew: 'פרקים קלה-קלב' },
    27: { chapters: 'קלג-קלט', hebrew: 'פרקים קלג-קלט' },
    28: { chapters: 'קמ-קמד', hebrew: 'פרקים קמ-קמד' },
    29: { chapters: 'קמה-קנ', hebrew: 'פרקים קמה-קנ (פרקי הלל)' },
    30: { chapters: 'כל הספר', hebrew: 'כל ספר תהילים - סיום המחזור!' }
};

// מידע נוסף על הימים המיוחדים
window.specialDays = {
    24: 'פרק קיט - הפרק הארוך ביותר בתהילים (176 פסוקים)',
    29: 'פרקי הלל - פרקים מיוחדים לשבח והודיה',
    30: 'יום סיום המחזור - קריאת כל ספר התהילים'
};

// הודעות עידוד
window.encouragementMessages = [
    'תזכו למצוות! 🙏',
    'המשיכו כך! 💪',
    'זכות גדולה! ✨',
    'תהילים מקרבים לבורא עולם! 💙',
    'כל פרק שווה עולמות! 🌟'
];

// פונקציה לקבלת הודעה רנדומלית
window.getRandomEncouragement = function() {
    const messages = window.encouragementMessages;
    return messages[Math.floor(Math.random() * messages.length)];
};

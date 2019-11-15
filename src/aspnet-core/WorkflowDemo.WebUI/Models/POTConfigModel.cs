namespace WorkflowDemo.WebUI.Models
{
    /// <summary>
    /// POT 20.5, 23.5, 24
    /// </summary>
    public class POTConfigModel
    {
        public const decimal LevelOne = 20.5M;
        public const decimal LevelTwo = 23.5M;
        public const decimal LevelThree = 24M;

        public static decimal GetNextLevel(decimal current)
        {
            if (current == LevelOne)
                return LevelTwo;
            return LevelThree;
        }

        public static decimal GetPreLevel(decimal current)
        {
            if (current == LevelThree)
                return LevelTwo;
            return LevelOne;
        }

        public static bool IsMinLevel(decimal current)
        {
            return current == LevelOne;
        }

        public static bool IsMaxLevel(decimal current)
        {
            return current == LevelThree;
        }

    }
}

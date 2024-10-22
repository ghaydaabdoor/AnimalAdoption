using System;
using System.Collections.Generic;

namespace ReactTask1API.Models;

public partial class Recipe
{
    public int RecipeId { get; set; }

    public string Title { get; set; } = null!;

    public string? ImageUrl { get; set; }

    public string? Description { get; set; }

    public int? PrepTime { get; set; }

    public string? NutritionFacts { get; set; }

    public string Category { get; set; } = null!;
}

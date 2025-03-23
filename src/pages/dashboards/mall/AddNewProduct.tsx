
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Package, Upload, Plus, X, Save } from "lucide-react";

interface FormData {
  name: string;
  category: string;
  customCategory?: string;
  price: string;
  shortDescription: string;
  longDescription: string;
}

const AddNewProduct = () => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>();
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const category = watch("category");

  const categories = [
    "Clothing & Accessories",
    "Electronics",
    "Home & Kitchen",
    "Beauty & Personal Care",
    "Books & Stationery",
    "Toys & Games",
    "Health & Wellness",
    "Food & Beverages",
    "Custom"
  ];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const allowedFiles = selectedFiles.slice(0, 7 - images.length);
      
      if (images.length + allowedFiles.length > 7) {
        toast.warning("You can upload a maximum of 7 images");
      }
      
      if (allowedFiles.length > 0) {
        setImages(prev => [...prev, ...allowedFiles]);
        
        // Create preview URLs
        const newPreviewUrls = allowedFiles.map(file => URL.createObjectURL(file));
        setPreviewUrls(prev => [...prev, ...newPreviewUrls]);
      }
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);

    // Revoke URL to prevent memory leaks
    URL.revokeObjectURL(previewUrls[index]);
    const newPreviewUrls = [...previewUrls];
    newPreviewUrls.splice(index, 1);
    setPreviewUrls(newPreviewUrls);
  };

  const onSubmit = (data: FormData) => {
    setIsUploading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Product data:", data);
      console.log("Images:", images);
      
      toast.success("Product added successfully!");
      setIsUploading(false);
      
      // Clear form
      setValue("name", "");
      setValue("category", "");
      setValue("customCategory", "");
      setValue("price", "");
      setValue("shortDescription", "");
      setValue("longDescription", "");
      setImages([]);
      
      // Revoke all URLs to prevent memory leaks
      previewUrls.forEach(url => URL.revokeObjectURL(url));
      setPreviewUrls([]);
    }, 1500);
  };

  return (
    <DashboardLayout title="Mall" type="mall">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Add New Product</h1>
            <p className="text-muted-foreground">Create a new product listing for your online store</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Product Information</CardTitle>
                <CardDescription>Enter the basic details about your product</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name <span className="text-red-500">*</span></Label>
                  <Input
                    id="name"
                    placeholder="Enter product name"
                    {...register("name", { required: "Product name is required" })}
                  />
                  {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Category <span className="text-red-500">*</span></Label>
                  <Select
                    onValueChange={(value) => setValue("category", value)}
                    value={category}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {category === "Custom" && (
                  <div className="space-y-2">
                    <Label htmlFor="customCategory">Custom Category <span className="text-red-500">*</span></Label>
                    <Input
                      id="customCategory"
                      placeholder="Enter custom category"
                      {...register("customCategory", { 
                        required: category === "Custom" ? "Custom category is required" : false 
                      })}
                    />
                    {errors.customCategory && (
                      <p className="text-sm text-red-500">{errors.customCategory.message}</p>
                    )}
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="price">Price (USD) <span className="text-red-500">*</span></Label>
                  <Input
                    id="price"
                    placeholder="29.99"
                    type="number"
                    step="0.01"
                    min="0"
                    {...register("price", { 
                      required: "Price is required",
                      min: { value: 0, message: "Price must be positive" }
                    })}
                  />
                  {errors.price && <p className="text-sm text-red-500">{errors.price.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="shortDescription">Short Description <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="shortDescription"
                    placeholder="Brief description of your product"
                    rows={3}
                    {...register("shortDescription", { 
                      required: "Short description is required",
                      maxLength: { value: 150, message: "Description should be less than 150 characters" }
                    })}
                  />
                  {errors.shortDescription && (
                    <p className="text-sm text-red-500">{errors.shortDescription.message}</p>
                  )}
                  <p className="text-xs text-muted-foreground text-right">
                    {watch("shortDescription")?.length || 0}/150
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="longDescription">
                    Detailed Description
                    <span className="text-muted-foreground text-xs font-normal ml-2">(Optional)</span>
                  </Label>
                  <Textarea
                    id="longDescription"
                    placeholder="Provide more detailed description of your product"
                    rows={6}
                    {...register("longDescription")}
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Product Images</CardTitle>
                <CardDescription>Upload up to 7 images of your product</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-3">
                  {previewUrls.map((url, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={url}
                        alt={`Preview ${index + 1}`}
                        className="aspect-square object-cover rounded-lg border"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  
                  {images.length < 7 && (
                    <label className="aspect-square flex flex-col items-center justify-center border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                      />
                    </label>
                  )}
                </div>
                
                <p className="text-xs text-muted-foreground">
                  {images.length}/7 images uploaded. JPG, PNG or GIF, max 5MB each.
                </p>
              </CardContent>
              
              <CardFooter>
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isUploading} 
                  onClick={handleSubmit(onSubmit)}
                >
                  {isUploading ? (
                    <>
                      <span className="animate-spin mr-2">
                        <svg className="h-4 w-4" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                      </span>
                      Adding Product...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Add Product
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddNewProduct;
